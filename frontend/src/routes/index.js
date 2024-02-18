import guestRoutes from "../routes/guestRoutes";
import loginRoutes from "../routes/loginRoutes";

const allRoutes = [...guestRoutes, ...loginRoutes];

export default allRoutes;
