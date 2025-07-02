import { Ionicons } from "@expo/vector-icons";

const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<Ionicons key={`full-${i}`} name="star" size={14} color="#FFD700" />);
    }

    if (hasHalfStar) {
        stars.push(<Ionicons key="half" name="star-half" size={14} color="#FFD700" />);
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<Ionicons key={`empty-${i}`} name="star-outline" size={14} color="#FFD700" />);
    }

    return stars
};

export default renderStars