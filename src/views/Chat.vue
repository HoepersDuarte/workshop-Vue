<template>
  <div class="container-fluid h-100 p-0 d-flex">
    <!-- Sidebar -->
    <div class="w-25 sidebar">
      <!-- Current User -->
      <div class="current-user bg-light d-flex align-items-center flex-nowrap p-2">
        <avatar :name="currentUser.displayName"/> <!-- Utilização do componente -->
        <div class="ml-2 text-truncate">{{currentUser.displayName}}</div> <!-- Nome do Usuário logado -->
        <button class="btn btn-sm btn-link ml-auto"><i class="material-icons">exit_to_app</i></button> <!-- Botão para sair do chat -->
      </div>

      <!-- Channels List -->
      <div class="channels-list bg-light p-2">
        <add-channel/>
        <channel v-for="i in 20" :key="`channel-${i}`" :name="`channel-${i}`"/>

      </div>
    </div>

    <!-- Channel Area -->
    <div class="d-flex flex-column w-75">
      <!-- Channel Header -->
      <div class="channel-header bg-light p-2 d-flex align-items-center">
      </div>
      <!-- Channel Messages -->
      <div class="channel-messages flex-grow-1 p-2" ref="channelMessages">
        <loader />
        <message v-for="message in messages" :message="message" :key="`message-${message.id}`" :current-user="currentUser"/>

      </div>
      <!-- Message Form -->
      <div style="height: 50px;" class="message-form border-top d-flex align-items-center">
        <message-form />
      </div>
    </div>
  </div>
</template>

<script>
import AddChannel from '@/components/AddChannel'
import Channel from '@/components/Channel'
import Loader from '@/components/Loader'
import Message from '@/components/Message'
import MessageForm from '@/components/MessageForm'

export default {
  name: 'Chat',
  data () {
    return {
    // Usuário logado (apenas temporariamente até realizarmos o login utilizando firebase)
      currentUser: {
        id: 1,
        displayName: 'Eduardo Schröder'
      },
      messages: []
    }
  },
  // Lifecycle Hook created... (https://vuejs.org/v2/api/#Options-Lifecycle-Hooks)
  created () {
    for (let i = 1; i <= 50; i++) {
      this.messages.push({
        id: i,
        content: `Mensage de teste ${i}`,
        timestamp: Date.now(),
        user: {
          id: 1,
          name: 'Eduardo Schröder'
        }
      })
    }
  },
  components: {
    AddChannel,
    Channel,
    Loader,
    Message,
    MessageForm
  },
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
