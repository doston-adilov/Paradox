<template>
    <div>
        <div class="row-search flex items-center space-x-2 border-b max-w-md pb-1 mb-7" :class="{'border-blue-550': isSearch}">
            <label for="search"><img src="/image/icons/search.svg" alt="search" width="15" height="15"></label>
            <input type="search" @input="search" placeholder="Поиск" class="focus:outline-none placeholder-primary w-full font-medium" id="search">
        </div>
        <div class="mt-5" v-if="error">
            <p class="text-primary">Ничего не найдено. Попробуйте изменить параметры поиска.</p>
        </div> 
        <List :results="results" />
    </div>
</template>

<style lang="postcss">
    #search::placeholder {
        @apply italic font-normal;
    }
    #search::-webkit-search-cancel-button {
        @apply bg-no-repeat bg-right outline-none cursor-pointer appearance-none w-3 h-3;
        background-image: url('/image/icons/close.svg');
    }
</style>
<script>
export default {
    data() {
        return {
            error: false,
            dump: [],
            isSearch: false,
            results: [],
        }
    },
    mounted() {
        this.dump = this.$store.getters['documents/getCategories'].concat(this.$store.getters['documents/getLists'])
    },
    methods: {
        
        search(event)  {
            if(event.target.value.length > 0) {
                this.$emit('isSearch', true)
                this.isSearch = true
                this.results = this.dump.filter(el => el.name.toLowerCase().includes(event.target.value.toLowerCase()))
                this.results == 0 ? this.error = true : this.error = false
            }else {
                this.$emit('isSearch', false)
                this.error = false
                this.isSearch = false
                this.results = []
            }
        }
    }
}
</script>