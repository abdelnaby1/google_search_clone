import React from 'react'
import { Switch,Route,Redirect } from 'react-router'
import { Results } from './Results'
export const Routes = () => {
    return (
        <div className="p-4">
            <Switch>
                <Route exact path="/">
                    <Redirect to="/search" />
                </Route>
                <Route exact path={['/search','/images','/search','/news','/videos']}>
                    <Results />
                </Route>
            </Switch>
        </div>
    )
}
