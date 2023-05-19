import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";
import Home from "@/views/home/index";

const homeRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/home/index",

				element: <Home />,
				meta: {
					requiresAuth: true,
					title: "Home",
					key: "home"
				}
			}
		]
	}
];

export default homeRouter;
