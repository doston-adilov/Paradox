export const state = () => ({
    categories: [
        {
            id: 0,
            name: 'Обязательные для всех',
            description: 'Документы, обязательные для всех сотрудников без исключения',
            statuses: [
                {
                    id: 3,
                    name: 'purple'
                },
                {
                    id: 4,
                    name: 'yellow'
                },
                {
                    id: 5,
                    name: 'orange'
                }
            ],
            is_required: false,
            children: []
        }, 
        {
            id: 1,
            name: 'Обязательные для трудоустройства',
            description: 'Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от граж',
            is_required: false,
            children: []
        }, 
        {
            id: 3,
            name: 'Специальные',
            is_required: false,
            children: []

        },
    ],
    lists: [
        {
            id: 4,
            name: 'Тестовое задание кандидата',
            description: 'Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха',
            is_required: false,
            children: []
        },
        {
            id: 5,
            name: 'Трудовой договор',
            statuses: [
                {
                    id: 1,
                    name: 'blue'
                },
                {
                    id: 2,
                    name: 'gray'
                }
            ],
            is_required: false,
            children: []
        },
        {
            id: 6,
            name: 'Мед. книжка',
            is_required: false,
            children: []
        },
        {
            id: 7,
            name: 'Паспорт ',
            description: 'Для всех',
            is_required: true,
            statuses: [
                {
                    id: 6,
                    name: 'cian'
                }
            ],
            children: []
        },
        {
            id: 8,
            name: 'ИНН',
            description: 'Для всех',
            is_required: true,
            children: []
        }
    ]
  })
  
  export const mutations = {}

  export const actions = {}
  
  export const getters = {
    getCategories(state) {
      return state.categories
    },
    getLists(state) {
        return state.lists
    }
  }