import { memo } from "react";
import "./PageLoader.scss";
export const PageLoader = memo(() => (
    <div className="page__loader" data-testid="pageLoader">
        <div className="lds-dual-ring"></div>
    </div>
));
