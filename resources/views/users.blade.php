@if ($users->count())

    @foreach ($users as $user)
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Name of Person</h5>
                <small>Following <span class="badge badge-primary">1</span></small>
                <small>Follower <span class="badge badge-primary follower">20</span></small>
            </div>

            <button>Follow</button>
        </div>
    @endforeach

@endif