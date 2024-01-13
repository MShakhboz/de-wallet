import { memo } from "react";
import { Skeleton } from "../../../../components";
import { LoadingBox, Row } from "./style";

export const SngRow = () => {
    return (
        <Row>
            <div className="row-col-1">
                <Skeleton width="40px" height="40px" rd="50%" />
            </div>
            <div className="row-col-2">
                <Skeleton width="118px" height="17px" rd="32px" />
                <Skeleton width="89px" height="17px" rd="32px" />
            </div>
            <div className="row-col-3">
                <Skeleton width="51px" height="17px" rd="32px" />
                <Skeleton width="34px" height="17px" rd="32px" />
            </div>
        </Row>
    );
};

const LoadingContainer = () => {
    return (
        <LoadingBox>
            <header>
                <Skeleton width="164px" height="27px" rd="32px" />
                <Skeleton width="118px" height="18px" rd="32px" />
            </header>
            <section>
                <div className="btn_box">
                    <Skeleton width="135px" height="50px" rd="40px" />
                    <Skeleton width="133px" height="50px" rd="40px" />
                    <Skeleton width="73px" height="50px" rd="40px" />
                </div>
                <div className="tab_box">
                    <Skeleton width="100%" height="32px" rd="9px" />
                </div>
                <div className="table">
                    {[1, 2, 3].map((itm, index: number) => (
                        <SngRow key={`row-loading_${index + 1}`} />
                        // <Skeleton width="40px" height="40px" rd="50%" />
                    ))}
                </div>
            </section>
        </LoadingBox>
    );
};

export default memo(LoadingContainer);
