import { ComponentProps,FC } from "react";

export const combineComponets = (...components: FC[]):FC =>{
    return components.reduce(
        (AccComponents,CurrComponent)=>{
            return ({children}: ComponentProps<FC>): JSX.Element =>{
                return (<AccComponents>
                    <CurrComponent>{children}</CurrComponent>
                </AccComponents>
                );
            };
        },
        ({children})=><>{children}</>
    );
};