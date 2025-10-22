import '../App.css';
import Header from '../components/Header'
import PostList from '../components/PostList'
import CreateButton from '../components/CreateButton';

export default function Home(){
    return (
        <>
        {/* <Header></Header> */}
        
        <CreateButton></CreateButton>
        <PostList></PostList>
        </>
    );
}