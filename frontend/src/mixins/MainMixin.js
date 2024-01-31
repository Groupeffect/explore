import { useRepo } from "pinia-orm"
import Internal from "@/models/Internal.js"
export default {
    name: "MainMixin",
    computed: {
        $brand(){
            return "Groupeffect"
        },
        $drf(){
            const drf = window.drf
            try {
                if (drf && drf.user.includes("{{")){
                    drf.user = null
                    drf.name = "demo"
                }
            }
            catch { 
                drf.name = "demo"
                return drf
            }
            // TODO
            // drf.user = "demo"
            // drf.user = 1 

            return drf
        },
        $host(){
            // TODO 
            return process.env.NODE_ENV === 'production'
            ? 'https://groupeffect.github.io/explore/'
            : 'http://localhost:8008'
        },
        $api(){
            return this.$axios
        },
        $error() {
            return useRepo(Internal).where("tag","error").first()
        },
        $urls() {
            const login = [{meta:{html_url:"/login/"},title:"Login",name:"Login"}]
            const logout = [{meta:{html_url:"/logout/"},title:"Logout"}]
            const auth = this.$drf.user ? logout:login
            const admin = [...auth, {meta:{html_url:"/admin"},title:"Admin"},{meta:{html_url:"/cms"},title:"CMS"}]
            return {
                home:[{meta:{html_url:"/"},title:"Home"}],
                auth: admin
            }   
        }
    },
    methods: {
        $saveDrf(){
            useRepo(Internal).save({tag:"drf",data:this.$drf})
        },
        $joinPaths(...paths) {
            return paths.map((path, index) => {
                if (index === 0) {
                    return path.endsWith('/') ? path.slice(0, -1) : path;
                } else {
                    return path.startsWith('/') ? path.slice(1) : path;
                }
            }).join('/');
        }
        
    }
}