<template>
  <v-main>
    <v-container
      class="py-8 px-6"
      fluid
    >
      <v-row>
        <v-col
          v-for="(item, index) of dateList"
          :key="index"
          cols="6"
        >
          <v-card>
            <v-subheader>社区帖子</v-subheader>

            <v-list two-line>
              <template v-for="(message, key) in item">
                <v-list-item
                  :key="key"
                >
                  <v-list-item-avatar color="grey darken-1">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="mb-4">帖子id {{ message.id }}</v-list-item-title>
                    <v-list-item-subtitle class="mb-2">
                       帖子内容: {{message.content}}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="mb-2">
                      用户ID: {{message.author_id}}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="mb-2">
                      发帖日期: {{message.created_at}}
                    </v-list-item-subtitle>
                    <v-btn  elevation="2" small>修改</v-btn>
                    <v-btn @click="deletebtn(message.id)" elevation="2" small class="ml-3">删除</v-btn>
                    <delete-dialog :contentId="message.id"></delete-dialog>
                    <delete-dialog></delete-dialog>
                  </v-list-item-content>
                </v-list-item>
<!--                <v-divider-->
<!--                  v-if="n !== 6"-->
<!--                  :key="`divider-${n}`"-->
<!--                  inset-->
<!--                ></v-divider>-->
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import DeleteDialog from './deleteDialog'
import axios from 'axios'
export default {
  name: 'MessageList',
  data: () => ({
    cards: ['Today', 'Yesterday'],
    dateList: [],
    listLength: '',
    contentId: ''
  }),
  components: {
    DeleteDialog
  },
  methods: {
    getUserInfo: function () {
      axios.get('/api/getUserInfo')
        .then((res) => {
          res = res.data
          if (res.data) {
            this.dateList = res.data
          }
        })
    },
    deletebtn: (id) => {
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
      alert('删除成功')
    }
  },
  beforeUpdate () {
    this.getUserInfo()
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<style scoped>

</style>
