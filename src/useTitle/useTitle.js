import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Toy Fusion`;
    }, [title])
}

export default useTitle;