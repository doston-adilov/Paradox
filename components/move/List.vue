<template>
    <VueNestable
        v-model="lists"
        cross-list
        group="cross"
        :max-depth="2">
        <template slot-scope="{ item }">
            <div class="drag-content flex justify-between">
                <div class="flex space-x-4 items-center">
                    <span class="drag-title text-black text-sm font-normal">{{ item.name }}</span>
                    <nav class="drag-statuses flex space-x-1" v-if="item.statuses">
                        <span class="block w-2 h-2 rounded-full" v-for="(status, index) in item.statuses" :key="index" 
                        :class="item.id == 1 ? 'bg-blue-550' : 
                        (status.id == 2) ? 'bg-primary' : 
                        (status.id == 3) ? 'bg-purple-550' : 
                        (status.id == 4) ? 'bg-yellow-550' : 
                        (status.id == 5) ? 'bg-orange-550' : 'bg-cian-550'">
                        </span>
                    </nav>
                    <span class="drag-required text-purple-550 text-xs font-normal" v-if="item.is_required">Обязательный</span>
                    <small class="drag-description text-primary font-normal text-xs">{{ item.description }}</small>

                </div>
                <nav class="drag-actions flex space-x-5">
                    <button type="button">
                        <img src="/image/icons/edit.svg" alt="edit" height="13">
                    </button>
                    <button type="button">
                        <img src="/image/icons/delete.svg" alt="delete" height="13">
                    </button>
                    
                    <VueNestableHandle :item="item">
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
export default {
    components: {
        VueNestable,
        VueNestableHandle,
    },
    data() {
        return {
            lists: []
        }
    },
    mounted() {
        this.lists = this.$store.getters['documents/getLists'];
    }
}
</script>
