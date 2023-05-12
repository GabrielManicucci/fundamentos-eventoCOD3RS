export default function Grade(props: any) {
  return (
    <div className="grid grid-cols-3 gap-3 p-4">
      {props.children}
    </div>

  )
}