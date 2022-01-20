import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
	contactsRoute,
	hireRoute,
	idleRoute,
	newsRoute,
	priceRoute,
	sellRoute,
	authRoute,
	newsIdRoute,
	changeNewsRoute,
	changePrice,
	changeContacts,
	newCreate,
	hire,
	hireChange,
	hireCreateComponent,
	idleCreateComponent,
	idleChangeComponent,
	idleComponent,
	sellCreateComponent,
	sellChangeComponent,
	sellComponent,
	allOrdersComponent,
} from "../pages";

export function Routes() {
	return (
		<Router>
			<Switch>
				<Route path='/news/create' component={newCreate} />
				<Route path='/news/:id/change' component={changeNewsRoute} />
				<Route path='/news/:id' component={newsIdRoute} />
				<Route path='/news' component={newsRoute} />
				<Route path='/price/change' component={changePrice} />
				<Route path='/price' component={priceRoute} />
				<Route path='/contacts/change' component={changeContacts} />
				<Route path='/contacts' component={contactsRoute} />
				<Route path='/hire/create' component={hireCreateComponent} />
				<Route path='/hire/:id/change' component={hireChange} />
				<Route path='/hire/:id' component={hire} />
				<Route path='/hire' component={hireRoute} />
				<Route path='/idle/create' component={idleCreateComponent} />
				<Route path='/idle/:id/change' component={idleChangeComponent} />
				<Route path='/idle/:id' component={idleComponent} />
				<Route path='/idle' component={idleRoute} />
				<Route path='/sell/create' component={sellCreateComponent} />
				<Route path='/sell/:id/change' component={sellChangeComponent} />
				<Route path='/sell/:id' component={sellComponent} />
				<Route path='/sell' component={sellRoute} />
				<Route path='/admin/all' component={allOrdersComponent} />
				<Route path='/admin' component={authRoute} />
			</Switch>
		</Router>
	);
}
