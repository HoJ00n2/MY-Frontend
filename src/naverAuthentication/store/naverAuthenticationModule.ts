import actions, { AuthenticationActions } from "./actions"
export interface NaverAuthenticationModule {
    namespaced: true
    actions: AuthenticationActions
}
const naverAuthenticationModule: NaverAuthenticationModule = {
    namespaced: true,
    actions,
}
export default naverAuthenticationModule