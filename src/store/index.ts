import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const store = createPinia()
store.use(createPersistedState({
    storage: sessionStorage,
    beforeRestore: () => {},
    afterRestore: () => {},
    serializer: {
        serialize: JSON.stringify,
        deserialize: JSON.parse,
    }
}))

export default store