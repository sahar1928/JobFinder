import React from 'react'
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import Footer from '../Components/Footer/Footer';
import SignIn from '../Components/Main/SignInMain';
const SignInPage = () => {
  return (
    <>
        <SearchForm/>
        <SidePanel/>
        <Header/>
        <SignIn/>
        <Footer/>
    </> 
    )
}

export default SignInPage;