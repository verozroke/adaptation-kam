export type TableRowLink = {
  text: string
  url: string
}

export type TableRow = {
  title: string
  link: TableRowLink | TableRowLink[]
}
