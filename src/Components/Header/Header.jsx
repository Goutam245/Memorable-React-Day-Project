
import pofile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-auto border-b-2'>
             <h1 className='text-4xl font-bold'>Knowledeg Cafe</h1>
             <img src={pofile} alt="" />
        </header>
    );
};

export default Header;