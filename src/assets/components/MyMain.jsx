//importiamo il componente ActorList per metterlo nel main
import ActorList from "./maincontent/ActorList"
import ActressList from "./maincontent/ActressList"
function MyMain() {


    return (
        <>
            <main>
                <ActorList />
                <ActressList />
            </main>
        </>
    )
}

export default MyMain