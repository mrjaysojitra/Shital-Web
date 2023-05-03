"use strict";
exports.id = 115;
exports.ids = [115];
exports.modules = {

/***/ 8115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/elements/BackToTop.js


function BackToTop() {
    const [hasScrolled, setHasScrolled] = (0,external_react_.useState)("false");
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
        };
    });
    // const scrollToTop = () => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // };
    const onScroll = ()=>{
        if (window.scrollY > 100 && !hasScrolled) {
            setHasScrolled(true);
        } else if (window.scrollY < 100 && hasScrolled) {
            setHasScrolled(false);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: hasScrolled && /*#__PURE__*/ jsx_runtime_.jsx("a", {
            class: `scroll-to-top scroll-to-target ${hasScrolled && "d-block"}`,
            href: "#top",
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                class: "fa fa-angle-up"
            })
        })
    });
}
/* harmony default export */ const elements_BackToTop = (BackToTop);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/Footer.js



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "main-footer",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-image zoom-two",
                    style: {
                        backgroundImage: "url(./images/background/4.jpg)"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "widgets-section",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-widget about-widget",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "logo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "images/logo-2.png",
                                                        title: "Shital"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text",
                                                children: "Get 26,000+ best online courses from us"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "social-icon-two",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-twitter"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-facebook"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-pinterest"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-widget",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "widget-title",
                                                children: "Explore"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "user-links",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: "Gallery"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: "News & Articles"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: "FAQ's"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: "Sign In/Registration"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: "Coming Soon"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: "Contacts"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-widget",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "widget-title",
                                                children: "Links"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "user-links",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: "About"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: "Courses"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: "Instructor"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: "Events"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: "Instructor Profile"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-column col-xl-5 col-lg-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-widget contact-widget",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "widget-title",
                                                children: "Contact"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "widget-content",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "contact-info",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa fa-phone-square"
                                                                    }),
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "tel:+926668880000",
                                                                        children: "+91 63588 21400"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa fa-envelope"
                                                                    }),
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "mailto:needhelp@potisen.com",
                                                                        children: "shitalacademyit@gmail.com"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa fa-map-marker-alt"
                                                                    }),
                                                                    "2212/C, HILL Drive, next to Sun Haemony Flat Opp. Solanki Restaurant, Sanskarmandal 364002    "
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "subscribe-form",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                            method: "post",
                                                            action: "#",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        type: "email",
                                                                        name: "email",
                                                                        className: "email",
                                                                        placeholder: "Email Address",
                                                                        required: true
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                        type: "button",
                                                                        className: "theme-btn btn-style-one",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fa fa-long-arrow-alt-right"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                class: "card-title text-center py-2",
                                children: "OUR BRANCH"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "card text-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        class: "card-body",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                class: "card-title",
                                                children: "BHAVNAGAR"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                class: "card-text",
                                                children: "Foolwadi Chowk, Hill Drive, Bhavnagar, Gujarat 364002"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                class: "card-text",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                    class: "text-muted",
                                                    children: "+91 93280 90700"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "card text-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        class: "card-body",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                class: "card-title",
                                                children: "BARODA"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                class: "card-text",
                                                children: [
                                                    "210/C, Manubhai Tower, Opp.",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "  M. S. University, Sayajiganj."
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                class: "card-text",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                    class: "text-muted",
                                                    children: "+91 63588 21400"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "card text-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        class: "card-body",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                class: "card-title",
                                                children: "AHMEDABAD"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                class: "card-text",
                                                children: [
                                                    "4th Floor, Ganesh Plaza, ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    " Anjali Cross Road, Opp. Swaminarayan Avenue, Vasana."
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                class: "card-text",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                    class: "text-muted",
                                                    children: "+91 63588 21600"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "card text-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        class: "card-body",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                class: "card-title",
                                                children: "ANAND"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                class: "card-text",
                                                children: "1st Floor, P. M. Square, Near Big Bazar, Vidhyanagar Main Road."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                class: "card-text",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                    class: "text-muted",
                                                    children: "+91 70415 59800"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "inner-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "copyright-text",
                                children: [
                                    "\xa9 Copyright 2022 by  ",
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "shitalacademy.com"
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/layout/MobileMenu.js



const MobileMenu = ()=>{
    const [isActive, setIsActive] = (0,external_react_.useState)({
        status: false,
        key: ""
    });
    const handleClick = (key)=>{
        if (isActive.key === key) {
            setIsActive({
                status: false
            });
        } else {
            setIsActive({
                status: true,
                key
            });
        }
    };
    const [isSubActive, setSubIsActive] = (0,external_react_.useState)({
        status: false,
        key: ""
    });
    const handleSubClick = (key)=>{
        if (isSubActive.key === key) {
            setSubIsActive({
                status: false
            });
        } else {
            setSubIsActive({
                status: true,
                key
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "navigation clearfix",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    class: "current",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/page-about",
                        children: "About"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    class: "dropdown",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/#",
                            children: "Blog"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: isActive.key === 2 ? "d-block" : "d-none",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-team",
                                        children: "Team"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-testimonial",
                                        children: "Testimonial"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/news-grid",
                                        children: "All Events"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-faq",
                                        children: "FAQ"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn",
                            onClick: ()=>handleClick(2),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                class: "fa fa-angle-down"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    class: "dropdown",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/#",
                            children: "Courses"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: isActive.key === 3 ? "d-block" : "d-none",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-course-details?course=spoken",
                                        children: "Spoken English"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-course-details?course=ielts",
                                        children: "IELTS"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-course-details?course=ccc",
                                        children: "CCC / CPT"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-course-details?course=tally",
                                        children: "Tally"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-course-details?course=webdes",
                                        children: "Web Design"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-course-details?course=webded",
                                        children: "Web Development"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-course-details?course=webfull",
                                        children: "Full Stack Development"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-course-details?course=py",
                                        children: "Python"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-course-details?course=digi",
                                        children: "Digital Marketing"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-course-details?course=adv",
                                        children: "Advanced Excel"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn",
                            onClick: ()=>handleClick(3),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                class: "fa fa-angle-down"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/page-contact",
                        children: "Contact"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/page-login",
                        children: "Login"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./components/layout/NavLinks.js



const NavLinks = ({ extraClassName  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: `navigation ${extraClassName}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "current",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/page-about",
                    children: "About"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/page-about",
                        children: "Blog"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page-team",
                                    children: "Team"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page-testimonial",
                                    children: "Testimonial"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/news-grid",
                                    children: "All Events"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page-faq",
                                    children: "FAQ"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/page-courses",
                        children: "Courses"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page-course-details?course=spoken",
                                    children: "Spoken English"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page-course-details?course=ielts",
                                    children: "IELTS"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page-course-details?course=ccc",
                                    children: "CCC / CPT"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page-course-details?course=tally",
                                    children: "Tally"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page-course-details?course=webdes",
                                    children: "Web Design"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page-course-details?course=webded",
                                    children: "Web Development"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page-course-details?course=webfull",
                                    children: "Full Stack Development"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page-course-details?course=py",
                                    children: "Python"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page-course-details?course=digi",
                                    children: "Digital Marketing"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page-course-details?course=adv",
                                    children: "Advanced Excel"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/page-contact",
                    children: "Contact"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/page-login",
                    children: "Login"
                })
            })
        ]
    });
};
/* harmony default export */ const layout_NavLinks = (NavLinks);

;// CONCATENATED MODULE: ./public/images/logo.png
/* harmony default export */ const logo = ({"src":"/apps/nextjs-cpanel/_next/static/media/logo.f0c9d37e.png","height":70,"width":174,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAVElEQVR4nBXKsQ1AUABF0ftFpROlRKUxhzFMYBMTGUFhBJVEo/ArjQr3Fye5yXsh1m0HXMrUBNg+GOxZRzpMRnDIHU57B0atWtKhN6Je3Sr1qFLxA6/VEiB5a0gZAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./public/images/logo-2.png
/* harmony default export */ const logo_2 = ({"src":"/apps/nextjs-cpanel/_next/static/media/logo-2.f0c9d37e.png","height":70,"width":174,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAVElEQVR4nBXKsQ1AUABF0ftFpROlRKUxhzFMYBMTGUFhBJVEo/ArjQr3Fye5yXsh1m0HXMrUBNg+GOxZRzpMRnDIHU57B0atWtKhN6Je3Sr1qFLxA6/VEiB5a0gZAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./components/layout/Header1.js








const Header1 = ({ handleOpen , handleRemove , searchToggle , handleToggle , scroll  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: `main-header header-style-one ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "main-box",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo-box",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: logo,
                                        title: "Shital"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nav-outer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                    className: "nav main-menu",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(layout_NavLinks, {
                                        extraClassName: "header1"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "outer-box",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                            href: "tel:+92(8800)9806",
                                            className: "info-btn",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon fa fa-phone"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                    children: "Call Anytime"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " +91 63536 21400"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/page-contact",
                                            className: "theme-btn btn-style-one",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "btn-title",
                                                children: "Try For Free"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mobile-nav-toggler",
                                            onClick: handleOpen,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "icon lnr-icon-bars"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mobile-menu",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu-backdrop",
                            onClick: handleRemove
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                            className: "menu-box",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "upper-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "nav-logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: logo_2,
                                                    title: "Shital"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "close-btn",
                                            onClick: handleRemove,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "icon fa fa-times"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "contact-list-one",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "contact-info-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon lnr-icon-phone-handset"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "title",
                                                        children: "Call Now"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/tel:+92880098670",
                                                        children: "+92 (8800) - 98670"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "contact-info-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon lnr-icon-envelope1"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "title",
                                                        children: "Send Email"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/mailto:help@company.com",
                                                        children: "help@company.com"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "contact-info-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon lnr-icon-clock"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "title",
                                                        children: "Send Email"
                                                    }),
                                                    "Mon - Sat 8:00 - 6:30, Sunday - CLOSED"
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "social-links",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-pinterest"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "search-popup",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "search-back-drop"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "close-search",
                            onClick: handleToggle,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "fa fa-times"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "search-inner",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                method: "post",
                                action: "#",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "search",
                                            name: "search-field",
                                            placeholder: "Search...",
                                            required: true
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa fa-search"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "inner-container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        title: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: logo,
                                            title: "Shital"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "nav-outer",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                            className: "main-menu",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "navbar-collapse show collapse clearfix",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {})
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mobile-nav-toggler",
                                            onClick: handleOpen,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "icon lnr-icon-bars"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Header1 = (Header1);

;// CONCATENATED MODULE: ./components/layout/Header2.js








const Header2 = ({ handleOpen , handleRemove , searchToggle , handleToggle , scroll  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: `main-header header-style-two ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "inner-container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "top-left",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text",
                                        children: "First 20 students get 50% discount. Hurry up!"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "top-right",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "useful-links",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        children: "Login"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        children: "Register"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "social-icon-one light",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fab fa-facebook-square"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fab fa-pinterest-p"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fab fa-instagram"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-upper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "inner-container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo-box",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: logo,
                                                title: "Shital"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "contact-info-outer",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "contact-info-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon lnr-icon-phone-handset"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "title",
                                                        children: "Call Anytime"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "tel:+92880098670",
                                                        className: "text",
                                                        children: "+ 98 (000) - 9630"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "contact-info-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon lnr-icon-phone-handset"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "title",
                                                        children: "Send Email"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/mailto:ambed@company.com",
                                                        className: "text",
                                                        children: "ambed@company.com"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "contact-info-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon lnr-icon-phone-handset"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "title",
                                                        children: "380 ST KildLink Road"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text",
                                                        children: "Melbourne, Australia"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mobile-nav-toggler",
                                    onClick: handleOpen,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon lnr-icon-bars"
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-lower",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-box",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "nav-outer",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                        className: "nav main-menu",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_NavLinks, {
                                            extraClassName: "header2"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "outer-box",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "ui-btn-outer",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "ui-btn ui-btn search-btn",
                                                        onClick: handleToggle,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "icon lnr lnr-icon-search"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        className: "ui-btn",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "lnr-icon-shopping-cart"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/page-contact",
                                                className: "theme-btn btn-style-two",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "btn-title",
                                                    children: "Try For Free"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mobile-menu",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu-backdrop",
                            onClick: handleRemove
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                            className: "menu-box",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "upper-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "nav-logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: logo_2,
                                                    title: "Shital"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "close-btn",
                                            onClick: handleRemove,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "icon fLink fa-times"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "contact-list-one",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "contact-info-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon lnr-icon-phone-handset"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "title",
                                                        children: "Call Now"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/tel:+92880098670",
                                                        children: "+92 (8800) - 98670"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "contact-info-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon lnr-icon-envelope1"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "title",
                                                        children: "Send Email"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/mailto:help@company.com",
                                                        children: "help@company.com"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "contact-info-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon lnr-icon-clock"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "title",
                                                        children: "Send Email"
                                                    }),
                                                    "Mon - Sat 8:00 - 6:30, Sunday - CLOSED"
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "social-links",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-pinterest"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "search-popup",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "search-back-drop"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "close-search",
                            onClick: handleToggle,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "fa fa-times"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "search-inner",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                method: "post",
                                action: "#",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "search",
                                            name: "search-field",
                                            placeholder: "Search...",
                                            required: true
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa fa-search"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "inner-container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        title: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: logo,
                                            title: "Shital"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "nav-outer",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                            className: "main-menu",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "navbar-collapse show collapse clearfix",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {})
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mobile-nav-toggler",
                                            onClick: handleOpen,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "icon lnr-icon-bars"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Header2 = (Header2);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/layout/PageHead.js



const PageHead = ({ headTitle  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: headTitle ? headTitle : "Shital | Academy"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "shortcut icon",
                    href: "/images/favicon.png",
                    type: "image/x-icon"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
                    rel: "stylesheet"
                })
            ]
        })
    });
};
/* harmony default export */ const layout_PageHead = (PageHead);

;// CONCATENATED MODULE: ./components/layout/Layout.js






// import Header3 from './Header3';
// import Header4 from './Header4';
// import Header5 from './Header5';

const Layout = ({ children , HeaderStyle  })=>{
    const [searchToggle, setSearchToggled] = (0,external_react_.useState)(false);
    const [scroll, setScroll] = (0,external_react_.useState)(0);
    const handleToggle = ()=>setSearchToggled(!searchToggle);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("scroll", ()=>{
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });
    const handleOpen = ()=>{
        document.body.classList.add("mobile-menu-visible");
    };
    const handleRemove = ()=>{
        document.body.classList.remove("mobile-menu-visible");
    };
    (0,external_react_.useEffect)(()=>{
        const WOW = __webpack_require__(477);
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_PageHead, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                class: "page-wrapper",
                id: "top",
                children: [
                    !HeaderStyle && /*#__PURE__*/ jsx_runtime_.jsx(layout_Header1, {
                        handleOpen: handleOpen,
                        handleRemove: handleRemove,
                        searchToggle: searchToggle,
                        handleToggle: handleToggle,
                        scroll: scroll
                    }),
                    HeaderStyle === "one" && /*#__PURE__*/ jsx_runtime_.jsx(layout_Header1, {
                        handleOpen: handleOpen,
                        handleRemove: handleRemove,
                        searchToggle: searchToggle,
                        handleToggle: handleToggle,
                        scroll: scroll
                    }),
                    HeaderStyle === "two" && /*#__PURE__*/ jsx_runtime_.jsx(layout_Header2, {
                        handleOpen: handleOpen,
                        handleRemove: handleRemove,
                        searchToggle: searchToggle,
                        handleToggle: handleToggle,
                        scroll: scroll
                    }),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(elements_BackToTop, {})
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;