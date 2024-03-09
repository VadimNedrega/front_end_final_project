
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { rangeOfProducts } from "../../resources";
import { ROUTE } from "../../router";

export function DropDownMenu({ categories }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuIcon, setMenuIcon] = useState(<MenuIcon />);
    const dropdownRef = useRef(null);
    const [hoveredCategory, setHoveredCategory] = useState("");
    const [hoveredProducts, setHoveredProducts] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const handleMouseLeave = () => {
            setShowDropdown(false);
            setHoveredCategory("");
            setHoveredProducts({});
            setMenuIcon(<MenuIcon />);
        };

        const refCurrent = dropdownRef.current;

        if (refCurrent) {
            refCurrent.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (refCurrent) {
                refCurrent.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, [dropdownRef]);

    const handleListItemHover = (category) => {
        if (category !== "Products") {
            const products =
                rangeOfProducts.categories[category]?.Products || {};
            setHoveredCategory(category);
            setHoveredProducts(products);
        }
    };

    const handleCurrentItemHover = (productKey) => {
        navigate(`${ROUTE.PRODUCT_CURRENT.replace(":productKey", productKey)}`);
    };

    const handleCategoryClick = (category) => {
        navigate(`${ROUTE.CATEGORY_CURRENT.replace(":category", category)}`);
    };

    const handleButtonHover = () => {
        setShowDropdown(prevState => !prevState);
        setMenuIcon(prevIcon => (!showDropdown ? <CloseIcon /> : <MenuIcon />));
    };

    return (
        <Box sx={{ position: "relative" }} ref={dropdownRef}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{
                    mr: 2,
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    whiteSpace: 'nowrap',
                }}
                className={`header__btn  header__btn_secondary header__dropdown_component ${
                    showDropdown ? 'active' : ''
                }`}
                onClick={handleButtonHover}
            >
                {menuIcon}
            </IconButton>

            {showDropdown && (
                <Box
                    sx={{
                        position: "absolute",
                        top: "100%",
                        left: "0%",
                        display: "block",
                        backgroundColor: "rgba(84, 102, 180, 0.9)",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        marginTop: "-0.5vw",
                        marginLeft: "0.2vw",
                        zIndex: 1,


                    }}
                    ref={dropdownRef}
                >
                    {categories.map((category) => (
                        <IconButton
                            key={category}
                            onMouseEnter={() => handleListItemHover(category)}
                            onClick={() => handleCategoryClick(category)}
                            sx={{
                                padding: "8px",
                                fontSize: "24px",
                                color: "#333",
                                cursor: "pointer",
                                transition: "background-color 0.3s ease",
                                whiteSpace: "nowrap",
                                "&:hover": {
                                    backgroundColor: "#f5f5f5",
                                },
                            }}
                        >
                            {category}
                        </IconButton>
                    ))}
                    {hoveredCategory !== "" && (
                        <Box
                            sx={{
                                position: "absolute",
                                top: "10%",
                                left: "100%",
                                transform: "translateY(5%)",
                                display: "block",
                                backgroundColor: "rgba(84, 102, 180, 0.9)",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                border: "1px solid #ddd",
                                borderRadius: "4px",
                                marginTop: "-0.5vw",
                                marginLeft: "0.2vw",
                                zIndex: 1,

                            }}
                        >
                            {Object.keys(hoveredProducts).map((productKey) => (
                                <IconButton
                                    key={productKey}
                                    onClick={() => handleCurrentItemHover(productKey)}
                                    sx={{
                                        padding: "8px",
                                        fontSize: "24px",
                                        color: "#333",
                                        cursor: "pointer",
                                        transition: "background-color 0.3s ease",
                                        whiteSpace: "nowrap",
                                        "&:hover": {
                                            backgroundColor: "#ece3a4",
                                        },
                                    }}
                                >
                                    {productKey}
                                </IconButton>
                            ))}
                        </Box>
                    )}
                </Box>
            )}
        </Box>
    );
}



// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, MenuItem } from "@mui/material";
// import { Menu as MenuIcon } from "@mui/icons-material";
// import { rangeOfProducts } from "../../resources";
// import { ROUTE } from "../../router";
//
// export function DropDownMenu({ categories }) {
//     const [showDropdown, setShowDropdown] = useState(false);
//     const dropdownRef = useRef(null);
//     const [hoveredCategory, setHoveredCategory] = useState("");
//     const [hoveredProducts, setHoveredProducts] = useState({});
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         const handleMouseLeave = () => {
//             setShowDropdown(false);
//             setHoveredCategory("");
//             setHoveredProducts({});
//         };
//
//         const refCurrent = dropdownRef.current;
//
//         if (refCurrent) {
//             refCurrent.addEventListener("mouseleave", handleMouseLeave);
//         }
//
//         return () => {
//             if (refCurrent) {
//                 refCurrent.removeEventListener("mouseleave", handleMouseLeave);
//             }
//         };
//     }, [dropdownRef]);
//
//     const handleListItemHover = (category) => {
//         if (category !== "Products") {
//             const products =
//                 rangeOfProducts.categories[category]?.Products || {};
//             setHoveredCategory(category);
//             setHoveredProducts(products);
//         }
//     };
//
//     const handleCurrentItemHover = (productKey) => {
//         navigate(`${ROUTE.PRODUCT_CURRENT.replace(":productKey", productKey)}`);
//     };
//
//     const handleCategoryClick = (category) => {
//         navigate(`${ROUTE.CATEGORY_CURRENT.replace(":category", category)}`);
//     };
//
//     const handleButtonHover = () => {
//         setShowDropdown(true);
//     };
//
//     const handleHomeClick = () => {
//         navigate(ROUTE.HOME);
//     };
//
//     return (
//         <Box sx={{ position: "relative" }} ref={dropdownRef}>
//             <MenuItem
//                 className={`header__btn header__btn_common header__btn_secondary ${
//                     showDropdown ? "active" : ""
//                 }`}
//                 onClick={handleButtonHover}
//             >
//                 Товари
//             </MenuItem>
//             {showDropdown && (
//                 <Box
//                     sx={{
//                         position: "absolute",
//                         top: "100%",
//                         left: 0,
//                         display: "block",
//                         bgcolor: "#5466b4",
//                         boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//                         border: "1px solid #ddd",
//                         borderRadius: "4px",
//                         zIndex: 1,
//                     }}
//                 >
//                     {categories.map((category) => (
//                         <MenuItem
//                             key={category}
//                             onMouseEnter={() => handleListItemHover(category)}
//                             onClick={() => handleCategoryClick(category)}
//                             sx={{
//                                 padding: "8px",
//                                 fontSize: "24px",
//                                 color: "#333",
//                                 cursor: "pointer",
//                                 transition: "background-color 0.3s ease",
//                                 whiteSpace: "nowrap",
//                                 "&:hover": {
//                                     backgroundColor: "#f5f5f5",
//                                 },
//                             }}
//                         >
//                             {category}
//                         </MenuItem>
//                     ))}
//                     {hoveredCategory !== "" && (
//                         <Box
//                             sx={{
//                                 position: "absolute",
//                                 top: 0,
//                                 left: "100%",
//                                 display: "block",
//                                 bgcolor: "#8cafd5",
//                                 boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//                                 border: "1px solid #ddd",
//                                 borderRadius: "4px",
//                                 marginTop: "-0.5vw",
//                                 marginLeft: "0.2vw",
//                                 zIndex: 1,
//                             }}
//                         >
//                             {Object.keys(hoveredProducts).map((productKey) => (
//                                 <MenuItem
//                                     key={productKey}
//                                     onClick={() => handleCurrentItemHover(productKey)}
//                                     sx={{
//                                         padding: "8px",
//                                         fontSize: "24px",
//                                         color: "#333",
//                                         cursor: "pointer",
//                                         transition: "background-color 0.3s ease",
//                                         "&:hover": {
//                                             backgroundColor: "#ece3a4",
//                                         },
//                                     }}
//                                 >
//                                     {productKey}
//                                 </MenuItem>
//                             ))}
//                         </Box>
//                     )}
//                 </Box>
//             )}
//         </Box>
//     );
// }


