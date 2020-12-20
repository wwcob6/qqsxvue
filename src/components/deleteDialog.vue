<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"

    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          删除
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          确定要删除吗
        </v-card-title>
        <v-card-text>删除后社区中将无法显示该帖子</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            取消
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="showId(contentId)"
          >
            确定{{contentId}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'deleteDialog',
  props: ['contentId'],
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    showId: function (id) {
      console.log(id)
      axios.get('/api/delete', {
        params: {
          id: id
        }
      })
        .then((res) => {
          console.log(res)
          alert('删除成功')
        })
        .catch((res) => {
          console.log('删除失败')
        })
      this.dialog = false
      console.log(this.dialog)
      alert('已经成功删除id 为：' + id + '的帖子')
    }
  }
}
</script>

<style scoped>

</style>
