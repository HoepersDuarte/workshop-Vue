<template>
  <div class="container-fluid h-100 p-0 d-flex" v-if="currentUser">
    <!-- Sidebar -->
    <div class="w-25 sidebar">
      <!-- Current User -->
      <div class="current-user bg-light d-flex align-items-center flex-nowrap p-2">
        <avatar :name="currentUser.displayName"/>
        <div class="ml-2 text-truncate">{{currentUser.displayName}}</div>
        <button class="btn btn-sm btn-link ml-auto" @click="logout"><i class="material-icons">exit_to_app</i></button>
      </div>

      <div class="channels-list bg-light p-2">
        <add-channel/>
        <!-- adicionada prop is-active -->
        <!-- adicionados listeners activate e archive -->
        <channel v-for="(channel, index) in channels" :key="`channel-${index}`" :name="channel" :is-active="channel === currentChannel" @activate="setActiveChannel" @archive="archiveChannel" />
      </div>
    </div>

    <div class="d-flex flex-column w-75">
      <div class="channel-header bg-light p-2 d-flex align-items-center">
        <!-- Adicionado nome do canal ativo -->
        #{{ currentChannel }}
      </div>
      <div class="channel-messages flex-grow-1 p-2" ref="channelMessages">
        <loader/>
      </div>
      <!-- Adicionada referencia para o componente de formulario de nova mensagem -->
      <message-form ref="messageForm"/>
    </div>
  </div>
</template>

<script>
import AddChannel from '@/components/AddChannel'
import Channel from '@/components/Channel'
import Loader from '@/components/Loader'
import MessageForm from '@/components/MessageForm'

export default {
  name: 'Chat',
  components: {
    AddChannel,
    Channel,
    Loader,
    MessageForm
  },
  data () {
    return {
      channelsListRef: window.firebase.firestore().collection('channels'),
      channels: [],
      channelListener: () => {}
    }
  },
  computed: {
    currentUser () {
      return this.$store.getters.currentUser
    },
    currentChannel () {
      return this.$store.getters.currentChannel
    }
  },
  methods: {
    logout () {
      window.firebase.auth().signOut()
        .then(() => {
          this.channelListener()
          this.$store.dispatch('setCurrentUser', null)
          this.$router.push('/login')
        })
        .catch(error => {
          console.error(error.message)
        })
    },
    // Método para definir o canal atual na store
    setActiveChannel (channelName) {
      this.$store.dispatch('setCurrentChannel', channelName)
      this.$nextTick(() => {
        this.$refs.messageForm.$el.querySelector('textarea').focus()
      })
    },
    // Método para arquivar o canal no firebase
    archiveChannel (channelName) {
      if (this.currentChannel === channelName) {
        this.setActiveChannel('todos')
      }

      window.firebase.firestore()
        .collection('channels')
        .doc(channelName)
        .set({ archived: true }, { merge: true })
    }
  },
  created () {
    this.channelListener = this.channelsListRef
      .where('archived', '==', false)
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        this.channels = querySnapshot.docs.map(doc => doc.id)
      })
    // Seta o canal todos ao acessar a aplicação
    this.setActiveChannel('todos')
  }
}
</script>

<style lang="scss">
$border-color: #c2c6ca;
.sidebar {
  border-right: 1px solid $border-color;
}

.current-user {
  height: 75px;
  font-size: 1.25rem;
  border-bottom: 1px solid $border-color;
}

.channels-list {
  height: calc(100% - 75px);
  overflow-y: auto;
}

.channel-header {
  height: 75px;
  font-size: 1.25rem;
  border-bottom: 1px solid $border-color;
}

.channel-messages {
  height: calc(100% - 125px);
  overflow-y: auto;
}

.fade-enter-active {
    animation: fade-in 300ms ease-out forwards;
}

.fade-leave-active {
    animation: fade-out 300ms ease-out forwards;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fade-out {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
</style>
