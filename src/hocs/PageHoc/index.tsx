import { NextComponentType } from "next";

import { Page } from "./Page";

const pageHoc = (Component: NextComponentType) => {
  // eslint-disable-next-line react/display-name
  return () => (
    <Page>
      <Component />
    </Page>
  );
};
export default pageHoc;
