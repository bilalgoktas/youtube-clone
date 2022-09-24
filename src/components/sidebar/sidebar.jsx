import React, { Fragment, useContext } from "react";
import styles from "./sidebar.module.css";
import classNames from "classnames";
import icons from "../../icons.js";
import { ThemeContext } from "../../contexts/ThemeContextProvider";

const Button = ({ icon, title }) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <button
      className={classNames(styles.btn, currentTheme === "dark" && styles.dark)}
    >
      {" "}
      <img src={icon} alt={title} /> <span>{title}</span>
    </button>
  );
};

const Sidebar = ({ isBarsClicked }) => {
  const { currentTheme } = useContext(ThemeContext);
  const firstSection = [
    { icon: icons.home, title: "Home" },
    { icon: icons.explore, title: "Explore" },
    { icon: icons.shorts, title: "Shorts" },
    { icon: icons.subscriptions, title: "Subscriptions" },
  ];

  const secondSection = [
    { icon: icons.library, title: "Library" },
    { icon: icons.history, title: "History" },
    { icon: icons.yourVideos, title: "Your videos" },
    { icon: icons.watchLater, title: "Watch later" },
    { icon: icons.yourClips, title: "Your clips" },
    { icon: icons.showMore, title: "Show more" },
  ];

  const thirdSection = [
    { icon: icons.profilePhoto, title: "Bilal Goktas" },
    { icon: icons.profilePhoto, title: "Proudly Presents" },
    { icon: icons.profilePhoto, title: "YouTube Homepage" },
    { icon: icons.profilePhoto, title: "UI Clone" },
    { icon: icons.showMore, title: "Show more" },
  ];

  const fourthSection = [
    { icon: icons.movies, title: "Movies" },
    { icon: icons.gaming, title: "Gaming" },
    { icon: icons.sports, title: "Sports" },
  ];

  const fifthSection = [
    { icon: icons.premium, title: "YouTube Premium" },
    { icon: icons.creatorStudio, title: "Creator Studio" },
    { icon: icons.youtubeMusic, title: "YouTube Music" },
    { icon: icons.youtubeKids, title: "YouTube Kids" },
    { icon: icons.youtubeTv, title: "YouTube TV" },
  ];

  const sixthSection = [
    { icon: icons.settings, title: "Settings" },
    { icon: icons.report, title: "Report history" },
    { icon: icons.help, title: "Help" },
    { icon: icons.feedback, title: "Send feedback" },
  ];

  const firstQuickLinks = [
    "About",
    "Press",
    "Copyright",
    "Contact us",
    "Creators",
    "Advertise",
    "Developers",
  ];

  const secondQuickLinks = [
    "Terms",
    "Privacy",
    "Policy & Safety",
    "How YouTube works",
    "Test new features",
  ];

  const smallSidebarItems = [
    { icon: icons.home, title: "Home" },
    { icon: icons.explore, title: "Explore" },
    { icon: icons.shorts, title: "Shorts" },
    { icon: icons.subscriptions, title: "Subscriptions" },
    { icon: icons.library, title: "Library" },
  ];

  return (
    <Fragment>
      {isBarsClicked ? (
        <div
          className={classNames(
            styles.largeContainer,
            currentTheme === "dark" && styles.dark
          )}
        >
          <div className={classNames(styles.section, styles.whiteIcon)}>
            {firstSection.map((item, index) => (
              <Button key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={classNames(styles.section, styles.whiteIcon)}>
            {secondSection.map((item, index) => (
              <Button key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={classNames(styles.section, styles.subscriptions)}>
            <h3>subscriptions</h3>
            {thirdSection.map((item, index) => (
              <Button key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={classNames(styles.section, styles.whiteIcon)}>
            <h3>explore</h3>
            {fourthSection.map((item, index) => (
              <Button key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={styles.section}>
            <h3>more from youtube</h3>
            {fifthSection.map((item, index) => (
              <Button key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={classNames(styles.section, styles.whiteIcon)}>
            {sixthSection.map((item, index) => (
              <Button key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={classNames(styles.section, styles.bottomLinks)}>
            <div className={styles.first}>
              {firstQuickLinks.map((item, index) => (
                <a key={index} href="#">
                  {item}
                </a>
              ))}
            </div>
            <div className={styles.second}>
              {secondQuickLinks.map((item, index) => (
                <a key={index} href="#">
                  {item}
                </a>
              ))}
            </div>
            <div className={styles.third}>
              <p>© 2022 Google LLC YouTube, a Google company</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={classNames(
            styles.smallContainer,
            currentTheme === "dark" && styles.dark
          )}
        >
          {smallSidebarItems.map((item, index) => (
            <div key={index} className={styles.item}>
              <img src={item.icon} alt={item.title} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Sidebar;
