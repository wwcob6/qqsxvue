
<template>
  <v-app id="inspire">
    <back-option></back-option>
    <message-list></message-list>
  </v-app>
</template>

<script>
import BackOption from './components/option.vue'
import MessageList from './components/MessageList.vue'
export default {
  name: 'App',
  components: {
    BackOption,
    MessageList
  },
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', 'Inbox'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam']
    ]
  })
}
</script>
