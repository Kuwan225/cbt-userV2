import { Button } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Styles from "./Header.module.scss";

const Header = () => {
  const route = useRouter().pathname;

  return (
    <div className={Styles["container-header"]}>
      <h1 className={Styles.title}>
        SMK YADIKA SOREANG <span style={{ fontWeight: 700 }}>CBT</span>
      </h1>

      <div className={Styles["container-card"]}>
        <img src="/image/ilus1.png" alt="img1" />
        <div>
          <div style={{ display: "flex" }}>
            <h1>Hello Student!</h1>
            <Button
              type="primary"
              size={"large"}
              className={Styles.button}
              disabled={route == "/" ? false : true}
              onClick={() =>
                window.open(
                  "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638040006871247542.MzUyZGU4YTAtNTU2ZC00NGI0LTkxNjAtMTBlMWU0YjdmNWQ4NmZlNmJlMzItNTE5My00YzdiLWI3YzItMGQ5ZGU2ZGY5MWQx&ui_locales=en-US&mkt=en-US&client-request-id=0c548957-0c9b-4266-99bf-56ca12262c62&state=8GMVpEitOi7-LEl5vVZ3bGuZ6xmvfwNYdSJQHdrTFGIGTVsPTy0_HDLG7TZBAkSm6u_NyQzmhsKvDoMkw4uuXgCMVo-ylZPrL_g_LVVCNoqHzPU35o7l27vWIXsTtDK7NnWMnSodjYTHuAQMvWzhRDUOcw_1XcfDht45KCrF5q8hKHwd8iBDpiWn1TL6J_UG9ehZ67IH9aQ96l1MkwcVY3k8xDAb3EzImEJMsF1F0YA-jvxmb2bkEm9Z84pJqNiecbutrG27rZzFJQwS3tQVhC759r3mPCSbyR0q3F2rNHU&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.16.0.0",
                  "_blank" // <- This is what makes it open in a new window.
                )
              }
            >
              Login
            </Button>
          </div>
          <p className={Styles["ready"]}>Ready for the test?</p>
          <p className={Styles["select-major"]}>Please select a major.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
