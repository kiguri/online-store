import MainWrap from '../components/MainWrap';
import { Tabs, TabList, Tab, TabPanels } from '../components/Tabs';
import Promo from '../components/Promo';
import SignupForm from '../components/SignupForm';
import SigninForm from '../components/SigninForm';

const SigninPage = () => {
    return (
        <MainWrap>
            <div className='lg:flex'>
                <Promo />
                <div className='lg:w-1/2 xl:w-2/3 lg:order-2 lg:flex ml-6'>
                    <Tabs>
                        <TabList>
                            <Tab>Sign in</Tab>
                            <Tab>Sign up</Tab>
                        </TabList>

                        <TabPanels>
                            <SigninForm />
                            <SignupForm />
                        </TabPanels>
                    </Tabs>
                </div>
            </div>
        </MainWrap>
    );
};

export default SigninPage;
