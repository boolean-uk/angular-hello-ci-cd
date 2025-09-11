import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tile {
  value: number;
  merged: boolean;
}

@Component({
  selector: 'app-2048',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-2048.component.html',
  styleUrls: ['./game-2048.component.css']
})
export class Game2048Component {
  size = 4;
  board: Tile[][] = [];
  score = 0;
  gameOver = false;
  won = false;

  private touchStartX = 0;
  private touchStartY = 0;
  private touchActive = false;

  lockRequested = false;
  constructor() {
    this.reset();
  }

  reset() {
    this.score = 0;
    this.gameOver = false;
    this.won = false;
    this.board = Array.from({ length: this.size }, () =>
      Array.from({ length: this.size }, () => ({ value: 0, merged: false }))
    );
    this.addRandomTile();
    this.addRandomTile();
  }

  addRandomTile() {
    const empty: { x: number; y: number }[] = [];
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        if (this.board[x][y].value === 0) {
          empty.push({ x, y });
        }
      }
    }
    if (empty.length === 0) return;
    const { x, y } = empty[Math.floor(Math.random() * empty.length)];
    this.board[x][y].value = Math.random() < 0.9 ? 2 : 4;
  }

  move(direction: 'up' | 'down' | 'left' | 'right') {
    if (this.gameOver || this.won) return;
    let moved = false;
    this.clearMerged();
    for (let i = 0; i < this.size; i++) {
      let line: Tile[];
      switch (direction) {
        case 'up':
          line = this.getCol(i);
          moved = this.moveLine(line) || moved;
          this.setCol(i, line);
          break;
        case 'down':
          line = this.getCol(i).reverse();
          moved = this.moveLine(line) || moved;
          this.setCol(i, line.reverse());
          break;
        case 'left':
          line = this.getRow(i);
          moved = this.moveLine(line) || moved;
          this.setRow(i, line);
          break;
        case 'right':
          line = this.getRow(i).reverse();
          moved = this.moveLine(line) || moved;
          this.setRow(i, line.reverse());
          break;
      }
    }
    if (moved) {
      this.addRandomTile();
      if (this.isGameOver()) {
        this.gameOver = true;
      }
    }
  }

  moveLine(line: Tile[]): boolean {
    let moved = false;
    for (let i = 1; i < this.size; i++) {
      if (line[i].value === 0) continue;
      let j = i;
      while (j > 0 && line[j - 1].value === 0) {
        line[j - 1].value = line[j].value;
        line[j].value = 0;
        moved = true;
        j--;
      }
      if (
        j > 0 &&
        line[j - 1].value === line[j].value &&
        !line[j - 1].merged &&
        !line[j].merged
      ) {
        line[j - 1].value *= 2;
        line[j - 1].merged = true;
        this.score += line[j - 1].value;
        if (line[j - 1].value === 2048) this.won = true;
        line[j].value = 0;
        moved = true;
      }
    }
    return moved;
  }

  clearMerged() {
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        this.board[x][y].merged = false;
      }
    }
  }

  getRow(i: number): Tile[] {
    return this.board[i];
  }

  setRow(i: number, row: Tile[]) {
    this.board[i] = row;
  }

  getCol(i: number): Tile[] {
    return this.board.map(row => row[i]);
  }

  setCol(i: number, col: Tile[]) {
    for (let j = 0; j < this.size; j++) {
      this.board[j][i] = col[j];
    }
  }

  isGameOver(): boolean {
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        if (this.board[x][y].value === 0) return false;
        if (
          (x < this.size - 1 && this.board[x][y].value === this.board[x + 1][y].value) ||
          (y < this.size - 1 && this.board[x][y].value === this.board[x][y + 1].value)
        ) {
          return false;
        }
      }
    }
    return true;
  }

  handleKey(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.move('up');
        break;
      case 'ArrowDown':
        this.move('down');
        break;
      case 'ArrowLeft':
        this.move('left');
        break;
      case 'ArrowRight':
        this.move('right');
        break;
    }
  }

  handleTouchStart(event: TouchEvent) {
    if (event.touches.length === 1) {
      // Only handle swipes if the touch is on the game area, not on a button
      const target = event.target as HTMLElement;
      if (target.closest('button')) return;
      this.touchActive = true;
      this.touchStartX = event.touches[0].clientX;
      this.touchStartY = event.touches[0].clientY;
      this.requestScreenLock();
      // Focus the game element
      const el = target.closest('.game-2048');
      if (el && 'focus' in el && typeof (el as HTMLElement).focus === 'function') {
        (el as HTMLElement).focus();
      }
      // Prevent scrolling while swiping on the game
      event.preventDefault();
    }
  }

  handleFocus() {
    this.requestScreenLock();
  }

  async requestScreenLock() {
    if (this.lockRequested) return;
    this.lockRequested = true;
    // Only try to lock on mobile devices
    if (typeof window !== 'undefined' && 'orientation' in screen && (navigator as any).userAgent) {
      const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test((navigator as any).userAgent);
      if (isMobile && (screen as any).orientation && (screen as any).orientation.lock) {
        try {
          await (screen as any).orientation.lock('portrait');
        } catch (e) {
          // Ignore errors (e.g., not supported)
        }
      }
    }
  }

  handleTouchEnd(event: TouchEvent) {
    if (!this.touchActive) return;
    this.touchActive = false;
    // Only handle swipes if the touch is on the game area, not on a button
    const target = event.target as HTMLElement;
    if (target.closest('button')) return;
    event.preventDefault();
    const touch = event.changedTouches[0];
    const dx = touch.clientX - this.touchStartX;
    const dy = touch.clientY - this.touchStartY;
    if (Math.abs(dx) < 30 && Math.abs(dy) < 30) return; // ignore small swipes
    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) {
        this.handleSwipe('right');
      } else {
        this.handleSwipe('left');
      }
    } else {
      if (dy > 0) {
        this.handleSwipe('down');
      } else {
        this.handleSwipe('up');
      }
    }
  }

  handleSwipe(direction: 'up' | 'down' | 'left' | 'right') {
    this.move(direction);
  }
}
