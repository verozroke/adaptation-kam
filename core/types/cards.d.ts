export type CardLink = {
  text: string
  url: string
}

export type Card = {
  title: string
  subtitle: string
  link: CardLink | CardLink[]
}