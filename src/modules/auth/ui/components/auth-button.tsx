import { Button } from "@/components/ui/button"
import { UserCircleIcon } from "lucide-react"

const AuthButton = () => {
    // TODO: Add different auth states
  return (
    <Button
      variant="outline"
      className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-500 border-blue-500/20
       rounded-full shadow-none [&_svg]:size-5">
        <UserCircleIcon/>
        Sign In
    </Button>
  )
}

export default AuthButton