<template>
    <VueNestable
        v-model="categories"
        cross-list
        group="cross"
        :max-depth="2"
        :hooks="{
            'beforeMove': beforeMove
        }"
        >
            <template slot-scope="{ item, isChild }">
                
                <div class="drag-content flex justify-between">
                    <div class="flex items-center space-x-4">
                        <button type="button" v-show="!isChild" @click="collapse" class="btn-collapse border border-gray-250 rounded-full w-6 h-6 flex items-center justify-center transform scale-110 cursor-pointer select-none">
                            <img src="/image/icons/arrow.svg" alt="arrow" class="transform rotate-180">
                        </button>
                        
                        <span class="drag-title text-black text-base font-medium">{{ item.name }}</span>
                        <nav class="drag-statuses flex space-x-1" v-if="item.statuses">
                            <span class="block w-2 h-2 rounded-full" v-for="(status, index) in item.statuses" :key="index" 
                            :class="item.id == 1 ? 'bg-blue-550' : 
                            (status.id == 2) ? 'bg-primary' : 
                            (status.id == 3) ? 'bg-purple-550' : 
                            (status.id == 4) ? 'bg-yellow-550' : 
                            (status.id == 5) ? 'bg-orange-550' : 'bg-cian-550'">
                            </span>
                        </nav>
                        <span class="drag-required text-purple-550 text-xs font-medium" v-if="item.is_required">Обязательный</span>
                        <small class="drag-description text-primary font-normal text-xs" v-if="item.description">{{ item.description }}</small>
                    </div>
                    <nav class="drag-actions flex space-x-5">
                        <button type="button">
                            <img src="/image/icons/edit.svg" alt="edit" height="13">
                        </button>
                        <button type="button">
                            <img src="/image/icons/delete.svg" alt="delete" height="13">
                        </button>
                        
                        <VueNestableHandle :item="item" class="flex items-center">
                            <button type="button">
                                <img src="/image/icons/move.svg" alt="move" height="12">
                            </button>
                        </VueNestableHandle>
                    </nav>
                </div>
            </template>
            <div slot="placeholder">
              <p class="text-primary text-lg font-medium">Список пуст!</p>
            </div>
        </VueNestable>
</template>

<script>

import { VueNestable, VueNestableHandle } from 'vue-nestable'
import { mapState } from "vuex";

export default {
    components: {
        VueNestable,
        VueNestableHandle,
    },
  data () {
    return {
        expanded: false,
        categories: [], 
    }
  },
  mounted() {
    this.categories = this.$store.getters['documents/getCategories'];
  },
  methods: {
    collapse(event) {
        let el = event.target.closest('li').classList;
        el.contains('expan') ? el.remove('expan') : el.add('expan')
        
    },
    beforeMove ({ dragItem, pathFrom, pathTo }) {
      if (dragItem.key === 2) {
        return pathTo.length === 1
      }
      return true
    }
  }
  
}
</script>


