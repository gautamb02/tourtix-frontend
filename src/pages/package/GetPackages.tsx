import React from "react";
import { Package } from "./types";
import PackageCard from "./PackageCard";

interface Props{
  funcToSetUpdatePackage: (pkg: Package)=>void;
  packages: Package[];
  fetchPackages:()=>void;
}

const GetPackages: React.FC<Props> = ({funcToSetUpdatePackage, packages,fetchPackages}) => {
  // Component implementation here

  return (
    <div>
      {/* Render activitiesServer and packages */}
      {packages.map((packageData) => {
        return <PackageCard  fetchPackages={fetchPackages} funcToSetUpdatePackage={funcToSetUpdatePackage} packageData={packageData} />;
      })}
    </div>
  );
};

export default GetPackages;
