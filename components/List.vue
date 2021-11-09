<template>
    <div>
        <div class="drag-content border border-gray-150 px-4 py-3 flex justify-between" v-for="(item, index) in results" :key="index">
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
        </div>
    </div>
</template>

<script>
export default {
    props: ['results']
}
</script>