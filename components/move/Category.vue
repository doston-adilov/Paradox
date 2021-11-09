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

<style lang="postcss">
.expan .btn-collapse {
    @apply transform scale-110 -rotate-180 !important;
}
.expan .nestable-list {
    @apply h-0 !important;
} 
.nestable-item .nestable-list {
    @apply relative h-full overflow-hidden;
} 

.nestable, .nestable-item {
    @apply relative;
  }
  .nestable-item + .nestable-item .nestable-item-content {
    @apply border-t-0;
  }
  .nestable-item .nestable-item-content {
    @apply border border-gray-150 px-4 py-3;
  }
  .nestable-item .nestable-list .nestable-item .nestable-item-content .drag-title, 
   .nestable-item .nestable-list .nestable-item .nestable-item-content .drag-required,
   .nestable-item .nestable-list .nestable-item .nestable-item-content .drag-drag-description {
    @apply text-sm !important;
  }
  .nestable-item .nestable-list .nestable-item .nestable-item-content {
    @apply border border-t-0 border-gray-150 px-4 py-2 !important;
  }
  .nestable-handle {
    @apply flex items-center;
  }
  .nestable-item .nestable-list
  {
    @apply ml-4;
  }
  .nestable-item.is-dragging .nestable-list {
    @apply pointer-events-none;
  }
  .nestable-item.is-dragging * {
    @apply opacity-0;

    filter: alpha(opacity=0);
  }
  .nestable-item.is-dragging:before {
    @apply absolute top-0 left-0 right-0 bottom-0;
    content: ' ';
    background-color: rgba(106, 127, 233, 0.274);
    border: 1px dashed rgb(73, 100, 241);
  }
  .nestable-drag-layer {
    @apply fixed top-0 left-0 right-0 bottom-0 h-full flex justify-between select-none pointer-events-none z-50;

  }
  .nestable-drag-layer > .nestable-list {
    @apply absolute top-0 left-0 p-0 bg-white border border-t-0 border-gray-150 px-4 py-2 !important;
    box-shadow: 0px 3px 16px rgba(0, 102, 255, 0.7)
  }
  .nestable [draggable="true"] {
    @apply cursor-move
  }
  .nestable-handle {
    @apply inline
  }
</style>

