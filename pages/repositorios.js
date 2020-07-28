import react from 'react'
import getUser from '../utils/getUser'
const Index = ({ repos, user }) => {
    //Div é JSX
    return(
        <div className='container mx-auto'>
            <h1 className='text-5xl'>Olá, eu sou o Igor Rangel</h1>
            <h2 className='font-bold text-3xl'>Meus Repositórios no GitHub</h2>
            <p>Github stats: public repos: {user.public_repos} / public_gists: {user.public_gists} / followers: {user.followers}</p>
            {repos.map(repo => {
                return (
                    <div key={repo.id} className='rounded bg-green-100 mx-8 my-4 p-4 hover:shadow-md'>
                        <h3 className='font-bold'>{repo.full_name}</h3>
                        <p>Language: {repo.language} / Starts: {repo.stargazers_count}</p>
                    </div>
                )
            })}
        </div>
    )
}
export async function getServerSideProps(context){
    const { repos, user } = await getUser('Igor202094')
    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user
        }
    }
}
export default Index