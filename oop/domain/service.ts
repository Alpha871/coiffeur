export class Service {
  constructor(
    public readonly id: string,
    public name: string,
    public durationMin: number,
    public priceCents: number,
    public description?: string | null
  ) {}
}
