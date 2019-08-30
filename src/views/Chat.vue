<template>
  <div class="container-fluid h-100 p-0 d-flex">
    <!-- Sidebar -->
    <div class="w-25 sidebar">
      <!-- Current User -->
      <div class="current-user bg-light d-flex align-items-center flex-nowrap p-2">
      </div>

      <!-- Channels List -->
      <div class="channels-list bg-light p-2">
      </div>
    </div>

    <!-- Channel Area -->
    <div class="d-flex flex-column w-75">
      <!-- Channel Header -->
      <div class="channel-header bg-light p-2 d-flex align-items-center">
      </div>
      <!-- Channel Messages -->
      <div class="channel-messages flex-grow-1 p-2" ref="channelMessages">
      </div>
      <!-- Message Form -->
      <div style="height: 50px;" class="message-form border-top d-flex align-items-center">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat'
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
