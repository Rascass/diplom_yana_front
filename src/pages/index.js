import React from "react";
import Auth from "../components/auth/auth";
import Contacts from "../components/contacts";
import Hire from "../components/hires";
import Idles from "../components/idles";
import News from "../components/news";
import Price from "../components/price";
import Sell from "../components/sell";
import NewsId from "../components/news/news/index.js";
import ChangeNews from "../components/news/news/change";
import PriceChange from "../components/price/change/index";
import ContactsChange from "../components/contacts/change/index";
import CreateNew from "../components/news/news/create/index";
import HireComponent from "../components/hires/hire/index";
import HireChange from "../components/hires/hire/change/index";
import HireCreate from "../components/hires/create/index";
import IdleCreate from "../components/idles/create"
import IdleChange from "../components/idles/idle/change"
import Idle from "../components/idles/idle/index"

export const contactsRoute = () => <Contacts />;
export const hireRoute = () => <Hire />;
export const idleRoute = () => <Idles />;
export const newsRoute = () => <News />;
export const priceRoute = () => <Price />;
export const sellRoute = () => <Sell />;
export const authRoute = () => <Auth />;
export const newsIdRoute = () => <NewsId />;
export const changeNewsRoute = () => <ChangeNews />;
export const changePrice = () => <PriceChange />;
export const changeContacts = () => <ContactsChange />;
export const newCreate = () => <CreateNew />;
export const hire = () => <HireComponent />;
export const hireChange = () => <HireChange />;
export const hireCreateComponent = () => <HireCreate />;
export const idleCreateComponent = () => <IdleCreate />;
export const idleChangeComponent = () => <IdleChange />;
export const idleComponent = () => <Idle />;
