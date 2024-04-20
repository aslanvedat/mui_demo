import { Favorite, FavoriteBorder } from "@mui/icons-material"
import { Rating, Stack } from "@mui/material"
import { useState } from "react"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null)
    console.log({ value })
    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue)
    }
    return (
        <Stack spacing={4} direction={"row"}>
            <Rating
                value={value}
                onChange={handleChange}
                precision={0.5} /*precision: hassasiyet bu ornektee yarim yildiz icin kullanildi !!(guzel ozellik) */
                size="large"
                icon={<FavoriteIcon fontSize="inherit" color="error" />} /*bu  ve alttaki ozellikler sayesinde yildiz sekli yerine baska iconlar kullanabiliyoruz*/
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
        </Stack>
    )
}
