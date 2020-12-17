<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <v-sheet
      color="grey lighten-4"
      class="pa-4"
    >
      <v-avatar
        class="mb-4 ml-15"
        color="grey darken-1"
        size="64"
      ></v-avatar>

      <div class="mx-16">管理员</div>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
        v-for="[icon, text] in links"
        :key="icon"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'BackOption',
  data: () => ({
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', '用户'],
      ['mdi-send', '社区帖子']
    ]
  })
}
</script>

<style scoped>

</style>
