import Link from "next/link";


const social_links = [
  // {
  //   link: "https://www.facebook.com/",
  //   target: "_blank",
  //   icon: "fab fa-facebook-f", 
  // },
  // {
  //   link: "https://twitter.com/",
  //   target: "_blank",
  //   icon: "fab fa-twitter", 
  // },  
  // {
  //   link: "https://www.behance.com",
  //   target: "_blank",
  //   icon: "fab fa-behance", 
  // }, 
  {
    link: "https://in.linkedin.com/company/hectorai?original_referer=https://hectorai.live",
    target: "_blank",
    icon: "fab fa-linkedin-in", 
  }, 
  // {
  //   link: "https://www.youtube.com/",
  //   target: "_blank",
  //   icon: "fab fa-youtube", 
  // },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <a
          key={i}
          href={l.link} 
          target={l.target ? l.target : ""}
        >
          <i className={l.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;



// home 04 social link
const social_links_two = [
  // {
  //   link: "https://www.facebook.com/",
  //   target: "_blank",
  //   icon: "fab fa-facebook-f",
  //   color: "1", 
  // },
  // {
  //     link: "https://www.instagram.com",
  //     target: "_blank",
  //     icon: "fab fa-instagram", 
  //     color: "2",
  // },

  // {
  //   link: "https://twitter.com/",
  //   target: "_blank",
  //   icon: "fab fa-twitter", 
  //   color: "3",
  // },
  {
    link: "https://in.linkedin.com/company/hectorai?original_referer=https://hectorai.live",
    target: "_blank",
    icon: "fab fa-linkedin-in",
    color: "1", 
  }, 
];

export const  SocialLinksTwo = ()  => {
   return (
     <>
        {social_links_two.map((link, i) => (
          <Link
            key={i}
            target={link.target}
            className={`icon-color-${link.color}`}
            href={link.link}
          >
            <i className={link.icon}></i>
            <span></span>
          </Link>
        ))}
     </>
   );
}