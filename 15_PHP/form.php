<!DOCTYPE html>
<html lang="en">
<head>
    <title>Anmeldeformular</title>
</head>
<body>
<?php
define(
    'PASSWORD_SALT',
    'wJMM4|{UT<&r<*~%.b:AOmWvw21(B5Gc_m:uSk^f,4bWHHMw|Su>@?5F7D4g)>~H'
);

function enumBrowsers( $value ): ?string {
    $possibleValues = [
        'chrome',
        'edge',
        'firefox',
        'opera',
        'safari'
    ];

    foreach ( $possibleValues as $possibleValue ) {
        if ( $possibleValue === $value ) {
            return $value;
        }
    }

    return null;
}

function hashPassword( $password ): string {
    return ! empty( $password ) ? crypt( $password, PASSWORD_SALT ) : '';
}

function selected( $currentValue, $fieldValue ) {
    if ( $currentValue === $fieldValue ) {
        echo ' selected="selected" ';
    }
}

function checked( $currentValue, $fieldValue ) {
    if ( $currentValue === $fieldValue ) {
        echo ' checked="checked" ';
    }
}


if ( ! empty( $_POST ) ) {
    $formFields = [
        'firstname'    => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
        'lastname'     => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
        'email'        => FILTER_SANITIZE_EMAIL | FILTER_VALIDATE_EMAIL,
        'password'     => [
            'filter'  => FILTER_CALLBACK,
            'flags'   => FILTER_REQUIRE_SCALAR,
            'options' => 'hashPassword'
        ],
        'browser'      => [
            'filter'  => FILTER_CALLBACK,
            'flags'   => FILTER_REQUIRE_SCALAR | FILTER_NULL_ON_FAILURE,
            'options' => 'enumBrowsers'
        ],
        'feedback'     => FILTER_VALIDATE_BOOLEAN,
        'improvements' => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
        'newsletter'   => FILTER_VALIDATE_BOOLEAN,
    ];

    $formData = filter_input_array(
        INPUT_POST,
        $formFields
    );

    $requiredFields = [
        'firstname',
        'lastname',
        'email',
        'password'
    ];

    $errorFields = [];

    foreach ( $requiredFields as $requiredField ) {
        if ( empty( $formData[ $requiredField ] ) ) {
            $errorFields[] = $requiredField;
        }
    }

    if ( count( $errorFields ) > 0 ) {
        echo '<p><strong>Bitte füllen Sie die folgenden Felder aus: '
             . implode( ', ', $errorFields )
             . '!</strong></p>';
    } else {
        $sendData = $formData;
        array_walk( $sendData, fn( &$val, $key ) => $val = $key . ': ' . $val );
        $message = implode( "\r\n", $sendData );

        $mailSent = mail(
            'info@example.com',
            'Mail vom Anmeldeformular',
            wordwrap( $message, 70, "\r\n" )
        );

        if ( ! $mailSent ) {
            echo '<p><strong>Leider konnte die E-Mail nicht versandt werden.</strong></p>';
        } else {
            echo '<p><strong>E-Mail wurde versandt!</strong></p>';
        }
    }
}
?>
<form action="" method="POST">
    <fieldset>
        <legend>Angaben zur Person</legend>
        <label>
            Vorname:
            <input type="text" name="firstname" value="<?php
            echo $formData['firstname'] ?? '';
            ?>" size="20" maxlength="50"/>
        </label>
        <br/>
        <label>
            Nachname:
            <input type="text" name="lastname" value="<?php
            echo $formData['lastname'] ?? '';
            ?>" size="30" maxlength="70"/>
        </label>
        <br/>
        <label>
            E-Mail:
            <input type="email" name="email" value="<?php
            echo $formData['email'] ?? '';
            ?>" size="30" maxlength="70"/>
        </label>
        <br/>
        <label>
            Passwort:
            <input type="password" name="password" size="20" maxlength="30"/>
        </label>
        <br/>
    </fieldset>
    <br/>
    <fieldset>
        <legend>Fragebogen</legend>
        <p>
            <label for="browser">
                Welchen Browser nutzen Sie?
            </label>
            <select id="browser" name="browser">
                <option value="chrome" <?php selected( 'chrome', $formData['browser'] ?? '' ); ?>>Google Chrome</option>
                <option value="edge" <?php selected( 'edge', $formData['browser'] ?? '' ); ?>>Microsoft Edge</option>
                <option value="firefox" <?php selected( 'firefox', $formData['browser'] ?? '' ); ?>>Mozilla Firefox
                </option>
                <option value="opera" <?php selected( 'opera', $formData['browser'] ?? '' ); ?>>Opera</option>
                <option value="safari" <?php selected( 'safari', $formData['browser'] ?? '' ); ?>>Safari</option>
            </select>
        </p>
        <p>
            Gefällt Ihnen unsere Website?
            <br/>
            <label>
                <input type="radio" name="feedback" value="yes"
                    <?php checked( true, $formData['feedback'] ?? '' ); ?>
                />
                Ja
            </label>
            <label>
                <input type="radio" name="feedback" value="no"
                    <?php checked( false, $formData['feedback'] ?? '' ); ?>
                />
                Nein
            </label>
        </p>
        <p>
            <br/>
            <label for="improvements">
                Haben Sie Verbesserungsvorschläge?
            </label>
            <br/>
            <textarea id="improvements" name="improvements" rows="5" cols="50"><?php
                echo $formData['improvements'] ?? '';
                ?></textarea>
        </p>
        <p>
            <label>
                <input type="checkbox" name="newsletter"
                    <?php checked( true, $formData['newsletter'] ?? '' ); ?>
                />
                Möchten Sie sich für unseren Newsletter anmelden?
            </label>
        </p>
    </fieldset>
    <input type="submit" value="Formular abschicken"/>
</form>
</body>
</html>