export const TRANSLATIONS_REDUCER = (
    state = {
        language: 'en'
    },
    action
) => {
        if (action.type === 'LOAD_LANGUAGE') {
            return state.language = action.language;
        }

        return state;
};
