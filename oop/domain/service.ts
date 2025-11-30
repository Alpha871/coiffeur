export class Service {
  private isActive: boolean = true;
  private category: string = "";
  private reviews: number[] = [];

  constructor(
    public readonly id: string,
    public name: string,
    public durationMin: number,
    public priceCents: number,
    public description?: string | null
  ) {}

  getPriceFormatted(): string {
    return (this.priceCents / 100).toFixed(2);
  }

  updatePrice(newPriceCents: number): void {
    if (newPriceCents < 0) {
      throw new Error("Price cannot be negative");
    }
    this.priceCents = newPriceCents;
  }

  setCategory(category: string): void {
    this.category = category;
  }

  getCategory(): string {
    return this.category;
  }

  addReview(rating: number): void {
    if (rating < 0 || rating > 5) {
      throw new Error("Rating must be between 0 and 5");
    }
    this.reviews.push(rating);
  }

  getAverageRating(): number {
    if (this.reviews.length === 0) return 0;
    return this.reviews.reduce((a, b) => a + b, 0) / this.reviews.length;
  }

  getTotalReviews(): number {
    return this.reviews.length;
  }

  deactivate(): void {
    this.isActive = false;
  }

  activate(): void {
    this.isActive = true;
  }

  isServiceActive(): boolean {
    return this.isActive;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      durationMin: this.durationMin,
      priceCents: this.priceCents,
      priceFormatted: this.getPriceFormatted(),
      description: this.description,
      category: this.category,
      isActive: this.isActive,
      averageRating: this.getAverageRating(),
      totalReviews: this.getTotalReviews(),
    };
  }
}
