import { Component, computed, EventEmitter, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<{ avatar: string, name: string, id: string }>();
  imagePath = computed(() => `assets/users/${this.user().avatar}`);
  onUserClick = output<string>();

  onSelectUser() {
    this.onUserClick.emit(this.user().id);
  }
}
