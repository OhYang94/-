/*
在自己本地的时候，
把第一个path对应的loadchildren
替换为自己模块的路径
*/
import { LoginComponent } from './login/login.component';

export const appRoutes = [

    {
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'workspace',
		loadChildren: './workspace/workspace.module#WorkspaceModule'
	}


]
