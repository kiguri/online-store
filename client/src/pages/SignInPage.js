import MainWrap from '../components/MainWrap';
import {
    Tabs,
    TabList,
    Tab,
    TabLabels,
    TabLabel,
    TabPanels,
} from '../components/Tabs';
import SignupForm from '../components/SignupForm';
import SigninForm from '../components/SigninForm';

const SigninPage = () => {
    return (
        <MainWrap>
            <Tabs>
                <TabList>
                    <Tab>Sign up</Tab>
                    <Tab>Sign in</Tab>
                </TabList>
                <TabLabels>
                    <TabLabel>Sign up</TabLabel>
                    <TabLabel>Sign in</TabLabel>
                </TabLabels>
                <TabPanels>
                    <SignupForm />
                    <SigninForm />
                </TabPanels>
            </Tabs>
        </MainWrap>
    );
};

export default SigninPage;
