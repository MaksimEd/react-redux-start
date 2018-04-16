const ADD_RECIPE = 'ADD_RECIPE'
export const addRecipe = () => ({
    type: ADD_RECIPE,
})

const REMOVE_RECIPE = 'REMOVE_RECIPE'
export const removeRecipe = id => ({
    type: REMOVE_RECIPE,
    id,
})

const UPDATE_RECIPE = 'UPDATE_RECIPE'
export const updateRecipe = (id, changeset) => ({
    type: UPDATE_RECIPE,
    id,
    changeset,
})

const initialState = [
    {
        id: 1,
        title: "test 1",
        content: "lorem12",
        price: ""
    },
    {
        id: 2,
        title: "test 2",
        content: "lorem12",
        price: ""
    },
    {
        id: 3,
        title: "test 3",
        content: "lorem12",
        price: ""
    }
]

export const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECIPE:
            return [...state, { id: Math.random(), title: "", content: "", price: 0 }]
        case REMOVE_RECIPE:
            return state.filter(recipe => recipe.id != action.id)
        case UPDATE_RECIPE:
            return state.map(recipe => recipe.id == action.id ? {...recipe, ...action.changeset} : recipe)
        default:
            return state
    }
}